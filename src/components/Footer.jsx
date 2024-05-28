import { useEffect, useState } from "react";

export const Footer = () => {
    const [joke, setJoke] = useState("");

    useEffect(() => {
        const fetchJoke = async () => {
            const response = await fetch("https://api.chucknorris.io/jokes/random");
            const data = await response.json();
            // console.log(data);
            // setJoke(data.value);
            let updated = data.value.replace("Chuck", "Prakash");
            let updated2 = updated.replace("Norris", "Jha");
            // console.log(updated2);
            setJoke(updated2);
        };
        fetchJoke();
    }, []);

    return (
        <footer>
            <h3>{joke} 🦥</h3>
            <p>Copyright Claim © Prakash Jha</p>
        </footer>
    )
}
