import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut
} from "firebase/auth";
import { 
  doc, 
  setDoc, 
  getDoc, 
  collection, 
  getDocs,
  updateDoc,
  deleteDoc
} from "firebase/firestore";
import { auth, db } from "./firebase";

/**
 * Autenticação e Gestão de Usuários usando Firebase
 */

export async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;
    
    // Buscar perfil do usuário no Firestore
    const userDoc = await getDoc(doc(db, "users", uid));
    
    if (userDoc.exists()) {
      return { id: uid, ...userDoc.data() };
    } else {
      // Caso não exista o doc do usuário (não deveria acontecer, mas por segurança)
      return { id: uid, email, role: 'user' };
    }
  } catch (error) {
    console.error("Erro no login:", error);
    if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
      throw new Error('E-mail ou senha incorretos.');
    }
    throw new Error('Erro ao fazer login: ' + error.message);
  }
}

export async function register(name, email, password, gender, whatsapp) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;
    
    // Dados do usuário
    const userData = {
      name,
      email,
      gender,
      whatsapp,
      role: 'user', // Pode ser alterado no banco para 'admin' manualmente
      createdAt: new Date().toISOString()
    };
    
    // Salvar no Firestore
    await setDoc(doc(db, "users", uid), userData);
    
    return { id: uid, ...userData };
  } catch (error) {
    console.error("Erro no cadastro:", error);
    if (error.code === 'auth/email-already-in-use') {
      throw new Error('Este e-mail já está em uso.');
    }
    throw new Error('Erro ao cadastrar: ' + error.message);
  }
}

export async function logout() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Erro ao fazer logout:", error);
  }
}

// O getCurrentUser síncrono é obsoleto com Firebase. 
// Usaremos um listener no AuthContext. Mas mantemos essa função apenas para utilidades se precisar
// (não recomendado depender dela, prefira o useAuth()).
export function getCurrentUser() {
  const user = auth.currentUser;
  return user ? { id: user.uid, email: user.email } : null;
}

export async function getUserProfile(uid) {
  try {
    const userDoc = await getDoc(doc(db, "users", uid));
    if (userDoc.exists()) {
      return { id: uid, ...userDoc.data() };
    }
    return null;
  } catch (error) {
    console.error("Erro ao buscar perfil:", error);
    return null;
  }
}

export async function updateUserProfile(userId, profileData) {
  try {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, profileData);
  } catch (error) {
    console.error("Erro ao atualizar perfil:", error);
    throw error;
  }
}

export async function updateUserAvatar(userId, base64Image) {
  // Para manter simples, vamos salvar a string base64 no Firestore. 
  // Em apps maiores, você deve usar o Firebase Storage.
  try {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, { avatar: base64Image });
  } catch (error) {
    console.error("Erro ao atualizar avatar:", error);
    throw error;
  }
}

export async function getAllUsers() {
  // Apenas para admin (requer regras de segurança no Firestore para proteger isso)
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });
    return users;
  } catch (error) {
    console.error("Erro ao buscar todos os usuários:", error);
    return [];
  }
}

export async function deleteUser(userId) {
  try {
    // Isso exclui apenas o doc do Firestore, não a conta real de Autenticação (por motivos de segurança do Firebase).
    // Para excluir a conta real, seria necessário usar o Firebase Admin SDK (backend).
    await deleteDoc(doc(db, "users", userId));
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
    throw error;
  }
}
