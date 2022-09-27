function AuthHeader() {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (user && user.access_token) {
        return { 'Authorization': `Bearer ${user.access_token}` };
    }
    else {
        return {};
    }
};

export default AuthHeader;