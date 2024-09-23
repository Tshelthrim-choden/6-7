import AuthStorage from '../utils/authStorage';

const authStorage = new AuthStorage();

// Set token
await authStorage.setAccessToken('your-token-here');

// Get token
const token = await authStorage.getAccessToken();
console.log(token);

// Remove token
await authStorage.removeAccessToken();


/// need to check  n do it 
