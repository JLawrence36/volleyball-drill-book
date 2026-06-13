window.CloudSync = (() => {
  let app = null;
  let auth = null;
  let db = null;
  let unsubscribe = null;

  function isReady() {
    return !!(window.firebase && window.firebaseConfig);
  }

  function init() {
    if (!isReady()) {
      console.warn("Firebase not ready.");
      return false;
    }

    if (!app) {
      app = firebase.initializeApp(window.firebaseConfig);
      auth = firebase.auth();
      db = firebase.firestore();
    }

    return true;
  }

  function getUser() {
    return auth ? auth.currentUser : null;
  }

  function stateDocRef() {
    const user = getUser();

    if (!user) {
      throw new Error("Not signed in.");
    }

    return db.collection("users").doc(user.uid).collection("planner").doc("state");
  }

  function onAuthChanged(callback) {
    if (!auth) return () => {};

    return auth.onAuthStateChanged(user => {
      callback(user);
    });
  }

  async function createAccount(email, password) {
    if (!auth) throw new Error("Firebase Auth not ready.");
    return auth.createUserWithEmailAndPassword(email, password);
  }

  async function signIn(email, password) {
    if (!auth) throw new Error("Firebase Auth not ready.");
    return auth.signInWithEmailAndPassword(email, password);
  }

  async function signOut() {
    if (!auth) return;
    return auth.signOut();
  }

  async function saveState(state) {
    const ref = stateDocRef();

    return ref.set({
      app: "Volleyball Practice Planner",
      version: "V5",
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      clientUpdatedAt: Date.now(),
      state
    }, { merge: true });
  }

  async function loadState() {
    const ref = stateDocRef();
    const snap = await ref.get();

    if (!snap.exists) return null;

    const data = snap.data();

    return data && data.state ? data.state : null;
  }

  function listenToState(callback) {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = null;
    }

    const ref = stateDocRef();

    unsubscribe = ref.onSnapshot(snapshot => {
      if (!snapshot.exists) return;

      const data = snapshot.data();

      if (data && data.state) {
        callback(data.state, data);
      }
    });

    return unsubscribe;
  }

  function stopListening() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = null;
    }
  }

  return {
    init,
    getUser,
    onAuthChanged,
    createAccount,
    signIn,
    signOut,
    saveState,
    loadState,
    listenToState,
    stopListening
  };
})();