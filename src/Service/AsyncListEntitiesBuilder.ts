import {url} from "./constants";

const requestOptions = {
    method: 'GET',
    headers: new Headers()
};
export async function getListOf() {
    try {
        const response = await fetch(`${url}`, requestOptions);
        if (response.ok) {
            const result = await response.json();
            console.log(result)
            return result;
        } else {
            throw new Error(response.statusText);
        }

    } catch (e) {
        console.log(e);
        return e;
    }
}