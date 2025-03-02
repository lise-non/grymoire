// composables/useAuth.js
import { ref, computed } from "vue";

// Create a single instance of the user state to share across the application
const user = ref(null);

// Initialize user from localStorage if available
if (process.client) {
  try {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      user.value = JSON.parse(savedUser);
    }
  } catch (e) {
    console.error("Error loading user from localStorage", e);
  }
}

export const useAuth = () => {
  // Initialize user registration - First step
  const initSignUp = async (email, password, username) => {
    try {
      // Validate input
      if (!email || !password) {
        throw new Error("Email et mot de passe sont requis");
      }

      // In a real app, you might check if the email is already registered
      // or perform other validations

      // Return user data for second step
      return {
        email,
        password,
        username: username || email.split("@")[0],
      };
    } catch (error) {
      console.error("Initial sign up validation failed:", error);
      throw error;
    }
  };

  // Complete user registration - Final step
  const finalizeSignUp = async (userData) => {
    try {
      // In a real app, you would call your registration API here
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Validate required data
      if (!userData.email || !userData.password) {
        throw new Error("Données d'inscription incomplètes");
      }

      // Create a complete user object
      const completeUserData = {
        id: "user_" + Date.now(),
        email: userData.email,
        displayName: userData.username || userData.email.split("@")[0],
        specialties: userData.specialties || [],
        createdAt: new Date().toISOString(),
      };

      // Update user state
      user.value = completeUserData;

      // Save to localStorage (in a real app, you'd use secure cookies or tokens)
      if (process.client) {
        localStorage.setItem("user", JSON.stringify(completeUserData));
      }

      return completeUserData;
    } catch (error) {
      console.error("Sign up finalization failed:", error);
      throw error;
    }
  };

  // Complete Google sign up with specialties
  const finalizeGoogleSignUp = async (specialties) => {
    try {
      // In a real app, you would integrate with Google OAuth
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock user data
      const userData = {
        id: "google_" + Date.now(),
        email: "google_user@example.com",
        displayName: "Google User",
        provider: "google",
        specialties: specialties || [],
        createdAt: new Date().toISOString(),
      };

      // Update user state
      user.value = userData;

      // Save to localStorage
      if (process.client) {
        localStorage.setItem("user", JSON.stringify(userData));
      }

      return userData;
    } catch (error) {
      console.error("Google sign up finalization failed:", error);
      throw error;
    }
  };

  // Sign in with email and password
  const signIn = async (email, password) => {
    try {
      // In a real app, you would call your authentication API here
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (!email || !password) {
        throw new Error("Email et mot de passe sont requis");
      }

      // Create a user object (in a real app, this would come from your backend)
      const userData = {
        id: "user123",
        email: email,
        displayName: email.split("@")[0],
        specialties: ["author"], // Example specialties
      };

      // Update user state
      user.value = userData;

      // Save to localStorage (in a real app, you'd use secure cookies or tokens)
      if (process.client) {
        localStorage.setItem("user", JSON.stringify(userData));
      }

      return userData;
    } catch (error) {
      console.error("Sign in failed:", error);
      throw error;
    }
  };

  // Sign in with Google
  const signInWithGoogle = async () => {
    try {
      // In a real app, you would integrate with Google OAuth
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock user data
      const userData = {
        id: "google123",
        email: "google_user@example.com",
        displayName: "Google User",
        provider: "google",
        specialties: ["betaReader"], // Example specialties
      };

      // Update user state
      user.value = userData;

      // Save to localStorage
      if (process.client) {
        localStorage.setItem("user", JSON.stringify(userData));
      }

      return userData;
    } catch (error) {
      console.error("Google sign in failed:", error);
      throw error;
    }
  };

  // Sign out
  const signOut = async () => {
    try {
      // In a real app, you would call your logout API
      await new Promise((resolve) => setTimeout(resolve, 300)); // Small delay for UX

      // Clear user state
      user.value = null;

      // Remove from localStorage
      if (process.client) {
        localStorage.removeItem("user");
      }

      return true;
    } catch (error) {
      console.error("Sign out failed:", error);
      throw error;
    }
  };

  // Check if user is authenticated
  const isAuthenticated = computed(() => !!user.value);

  // Get current user
  const getCurrentUser = () => user.value;

  return {
    user,
    initSignUp,
    finalizeSignUp,
    finalizeGoogleSignUp,
    signIn,
    signInWithGoogle,
    signOut,
    isAuthenticated,
    getCurrentUser,
  };
};
