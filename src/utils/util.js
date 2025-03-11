import bcrypt from 'bcrypt';
const createHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10));
const isValidPassword = (password, user) => {
    if (!password || !user || !user.password) {
        console.error("Error: Uno de los valores es undefined o null", { password, user });
        return false;
    }
    return bcrypt.compareSync(password, user.password);
};

export {createHash, isValidPassword};