const baseUrl = 'http://localhost:5001';

export const login = async (email, password) => {
    let res = await fetch(`${baseUrl}/Identity/Login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });

    let jsonResult = await res.json();

    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult.errors;
    }
};

export const register = async (email, password) => {
    let res = await fetch(`${baseUrl}/Identity/Register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })       
    });

    let jsonResult = await res.json();

    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult.errors;
    }
};

export const logout = () => {

};

export const getUser = () => {
    let username = localStorage.getItem('username');

    return username;
};

export const isAuthenticated = () => {
    return Boolean(getUser())
};