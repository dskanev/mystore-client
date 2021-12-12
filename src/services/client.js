export const request = async (method, url, data) => {
    let result = null;

    result = fetch(url, {
        method,
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify(data)
    });
    
    return result.then(responseHandler);
};

async function responseHandler(res) {
    let jsonData = await res.json();

    if (res.ok) {
        return Object.values(jsonData);
    } else {
        throw jsonData;
    }
};

function getToken() {
    try {
        let userItem = localStorage.getItem('user');

        if (!userItem) {
            throw {message: 'You must be authenticated'};
        }

        let user = JSON.parse(userItem);

        return user.token;
    } catch(err) {
        console.log(err);
    }
}

export const get = request.bind(null, 'GET');
export const put = request.bind(null, 'PUT');
export const post = request.bind(null, 'POST');