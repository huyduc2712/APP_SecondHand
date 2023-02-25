export const checkEmptyForm = (data, message) => {
    for(let i in data) {
        if (!data[i]) {
            alert(message[i]);
            return false;
        }
    }
    return true;
}