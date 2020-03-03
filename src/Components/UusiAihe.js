import React, { Component } from 'react';
// import lisaaJuttu from './Lista'
// import RadioForm from './RadioForm';

//Tähän lomake, jolla voi lisätä uuden aiheen ja sen tiedot!

export default class UusiAihe extends Component {
    state = { id: '', title: '', description: '', timetomaster: 0, timespent: 0, source: '', startlearningdate: '', inprogress: '' };

    newTitle = (e) => { this.setState({ title: e.target.value }); }
    newDescription = (e) => { this.setState({ description: e.target.value }); }
    newTimetomaster = (e) => {
        this.setState({ timetomaster: e.target.value });
    }
        newTimespent = (e) => { this.setState({ timespent:parseInt(e.target.value) }); }
        newSource = (e) => { this.setState({ source: e.target.value }); }
        newStartlearningdate = (e) => { this.setState({ startlearningdate: e.target.value }); }
        newInprogress = (e) => { this.setState({ inprogress: e.target.value }); }
   
    nappiaKlikattu = (e) => {
        
        e.preventDefault();
        this.props.lisaaJuttu({ ...this.state });
        this.setState({ id: '', title: '', description: '', timetomaster: 0, timespent: 0, source: '', startlearningdate: '', inprogress: '' });

    }


    render() {
        return (
            <div className="List">
                <form>
                    <h3>Lisää uusi aihe</h3>
                    <div>
                        <label htmlFor="form_title">Otsikko </label>
                        <input type="text" placeholder="Aihe" id="form_title"
                            value={this.state.title} onChange={this.newTitle} required="required" />
                    </div>
                    <br></br>
                    <div>
                        <label htmlFor="form_description">Kuvaus </label>
                        <textarea type="text" placeholder="Kuvaile aihetta" id="form_description"
                            value={this.state.description} onChange={this.newDescription}>
                        </textarea>
                    </div>
                    <br></br>
                    <div>
                        <label htmlFor="form_timetomaster">Aika-arvio </label>
                        <input type="number" placeholder="tuntia" id="form_timetomaster"
                            value={this.state.timetomaster} onChange={this.newTimetomaster} />
                    </div>
                    <br></br>
                    <div>
                        <label htmlFor="form_timespent">Käytetty aika</label>
                        <input type="number" placeholder="tuntia" id="form_timespent"
                            value={this.state.timespent} onChange={this.newTimespent} />
                    </div>
                    <br></br>
                    <div>
                        <label htmlFor="form_source">Tietolähde </label>
                        <textarea type="text" placeholder="Kirjoita tähän" id="form_source"
                            value={this.state.descriptionsource} onChange={this.newSource}>
                        </textarea>
                    </div>
                    <br></br>
                    <div>
                        <label htmlFor="form_startlearningdate">Aloituspvm</label>
                        <input type="date" id="form_startlearningdate"
                            value={this.state.startlearningdate} onChange={this.newStartlearningdate} />
                    </div>
                    <br></br>
                <div>
                        <span>Onko opiskelu kesken?</span>
                        <input id="yes" type="radio" className="kesken" value="yes"></input>
                        <label htmlFor="yes">Kyllä</label>
                        <input id="no" type="radio" className="kesken" value="no"></input>
                        <label htmlFor="no">Ei</label>
                    </div>    

                    <div><input type="submit" value="Lisää" onClick={this.nappiaKlikattu} /></div>
                </form>
            </div>
        )
    }
}