import React, { Component } from 'react';
// import UusiAihe from './UusiAihe';
import {haeTopicit} from '../serviceclient';
import {luoTopic} from '../serviceclient';
import {poistaTopic} from '../serviceclient';
import UusiAihe from './UusiAihe';
class Lista extends Component {
    state = { topics: [] }
    componentDidMount = () => {
        this.updateTopics();
    }

    updateTopics = async () => {
        console.log("update");
        let data = await haeTopicit()
        console.log(data);
        this.setState({ topics: data })
    }

    lisaaJuttu = async (t) => {
        console.log("Lisää juttu")
        let data = await luoTopic(t)
        console.dir(data)
       // this.setState(this.state)
        this.updateTopics();
    };

    tuhoaJuttu = async (id) => {
        await poistaTopic (id)
        this.setState(this.state);
        this.updateTopics();
    }

    render() {
        var lista = this.state.topics.map(t => {
            return (<tr><td>{t.title}</td><td>{t.description}</td>
            <td>{t.timetomaster}</td><td>{t.timespent}</td><td>{t.source}</td>
            <td>{t.startlearningdate}</td><td>{t.inprogress}</td> 
            <button type="button" onClick={this.tuhoaJuttu}>Delete</button></tr>)
        })
        return (
            <div>
                <UusiAihe lisaaJuttu={this.lisaaJuttu}/>

                <p>Aiheiden määrä {this.state.topics.length}</p>
                {/* <UusiAihe lista={topics} lisaaUusi={this.lisaaJuttu} /> */}
                <table>
                    <thead>
                        <tr>
                            <th>Aihe</th>
                            <th>Kuvaus</th>
                            <th>Aika-arvio</th>
                            <th>Käytetty aika</th>
                            <th>Tietolähde</th>
                            <th>Aloituspvm</th>
                            <th>Onko opiskelu kesken?</th>
                        </tr>
                    </thead>
                    <tbody>{lista}</tbody>
                </table>
            </div>
        )
    }
}

export default Lista;