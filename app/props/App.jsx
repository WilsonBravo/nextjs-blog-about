import Jokes from "./components/Jokes"

export default function App () {
    return (
        <>
            <Jokes 
                joke={<><h3>Joke 1</h3><p><strong>Setup: </strong>I got my daugther a fridge for her birthday.</p><p><strong>Punchline:</strong>I can't wait to see her face light up when she opens it.<hr/></p></>} 
            />
            <Jokes 
                joke={<><h3>Joke 2</h3><p><strong>Setup:</strong> How did the hacker escape the police?</p><p><strong>Punchline:</strong> He just ransomware!<hr/></p></>}  
            />
            <Jokes 
                joke={<><h3>Joke 3</h3><p><strong>Setup:</strong> Why don't pirates travel on mountain roads?</p><p><strong>Punchline:</strong> Scurvy.<hr/></p></>}  
            />
            <Jokes 
                joke={<><h3>Joke 4</h3><p><strong>Setup:</strong> Why do bees stay in the hive in the winter?</p><p><strong>Punchline:</strong> Swarm.<hr/></p></> } 
            />
            <Jokes 
                joke={<><h3>Joke 5</h3><p><strong>Setup:</strong> What's the best thing about Switzerland?</p><p><strong>Punchline:</strong> I don't know, but the flag is a big plus!<hr/></p></>}
            />
        </>
    )
}