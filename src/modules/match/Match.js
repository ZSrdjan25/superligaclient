import React from 'react';
import SEO from '../../shared/components/seo/SEO';

const Match = (props) =>{

    const[match, setMatch] = React.useState({data:[]});
    const[newMatch, setNewMatch] = React.useState({
        numberRounds: 0,
        homeTeam: "",
        guestTeam: "",
        homeGoals:0,
        guestGoals: 0,
    });
    const[addNewMatch, setAddNewMatch] = React.useState(false);

    React.useEffect(()=>{
        fetch("http://localhost:57902/api/Match")
        .then(response => response.json())
        .then(response => {
            setMatch({...match,data: response});
            setAddNewMatch(false);
        })
        .catch(console.error("Greska"));
    },[]);

    const addNewMatchButton = () =>{
        setAddNewMatch(true);
    }

    const handleNumberRounds = (event) =>{
        setNewMatch({...newMatch, numberRounds:event.target.value})
    }

    const handleHomeTeam = (event) =>{
        setNewMatch({...newMatch, homeTeam:event.target.value})
    }

    const handleGuestTeam = (event) =>{
        setNewMatch({...newMatch, guestTeam:event.target.value})
    }

    const handleHomeGoals = (event) =>{
        setNewMatch({...newMatch, homeGoals:event.target.value})
    }

    const handleGuestGoals = (event) =>{
        setNewMatch({...newMatch, guestGoals:event.target.value})
    }

    const handleMatchRequest = (event) =>{
        event.preventDefault();

        const requestOptions = {
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json' },
            body: JSON.stringify(newMatch)
        }
        fetch("http://localhost:57902/api/Match", requestOptions)
        .then(response =>{
            if(response.ok){
                setAddNewMatch(false);
                return response.json();
            }
        })
        .then(data => {
            console.log('Success:', data);
          })
        .catch(err =>{console.log(err)})
 }

    return(
       <>
       <SEO title="Rezultati" description="Rezultati Super Lige" url="/rezultati"/>
        {!addNewMatch &&(
             <div className='flex flex-col'>
             <div className='flex justify-center font-bold text-4xl'>Rezultati</div>
              <div className='flex justify-center pt-12'>
                <div className='flex flex-col w-72 p-2 rounded'>
                       
                       {!!match && !!match.data && match.data.map((match,index)=>(
                       <>
                       <div className='border-2 border-primary-border mb-4 rounded'>
                          <div className='flex flex-row p-2'>
                               <div className='flex flex-col mr-4'>
                                   <span className='font-bold'>Tim</span>
                                   <span className='font-bold'>Rezultat</span>
                               </div>
                               <div key={index} className="flex flex-col">
                                       <div className=' flex item-self'>
                                           <span className='font-semibold'>{match.homeTeam}</span>
                                           <span className='font-semibold'>{match.guestTeam}</span>
                                       </div>
                                       <div className='flex justify-between'>
                                           <span className='font-semibold'>{match.homeGoals}</span>
                                           <span className='font-semibold'>{match.guestGoals}</span>
                                       </div>
                               </div>
                          </div>
                       </div>
                      </>
                      ))}
                 </div>
                 
              </div>
              <button className="border-2 border-primary-border rounded-lg px-1 py-0.5 bg-button-primary-background text-white font-bold" onClick={addNewMatchButton}>Dodaj novu utakmicu</button>
           </div>
        )}
        {!!addNewMatch && (
            <div className='flex justify-center'>
                <div className='mt-12'>
                <span className='font-bold text-3xl'>Dodaj utakmicu</span>
                    
                    <div className='flex flex-col pt-4'>
                        <label className='font-bold '>Broj Kola:</label>
                        <input 
                            id="numberRounds"
                            type="number"
                            value={newMatch.numberRounds}
                            className='border-2 border-primary-border rounded ml-1'
                            onChange={handleNumberRounds}
                        />
                    </div>
               
                <div className='flex flex-col'>
                        <label className='font-bold '>Domacin:</label>
                        <input 
                            id="homeTeam"
                            type="text"
                            value={newMatch.homeTeam}
                            className='border-2 border-primary-border rounded ml-1'
                            onChange={handleHomeTeam}
                        />
                </div>

                <div className='flex flex-col'>
                    <label className='font-bold '>Gost:</label>
                        <input 
                            id="guestTeam"
                            type="text"
                            value={newMatch.guestTeam}
                            className='border-2 border-primary-border rounded ml-1'
                            onChange={handleGuestTeam}
                        />
                </div>

                <div className='flex flex-col'>
                    <label className='font-bold '>Broj golova domacina:</label>
                        <input 
                            id="homeGoals"
                            type="number"
                            value={newMatch.homeGoals}
                            className='border-2 border-primary-border rounded ml-1'
                            onChange={handleHomeGoals}
                        />
                </div>

                <div className='flex flex-col'>
                    <label className='font-bold '>Broj golova gosta:</label>
                        <input 
                            id="guestGoals"
                            type="number"
                            value={newMatch.guestGoals}
                            className='border-2 border-primary-border rounded ml-1'
                            onChange={handleGuestGoals}
                        />
                </div>
                    
                <button className="border-2 border-primary-border rounded-lg px-1 py-0.5 bg-button-primary-background text-white font-bold my-4" onClick={handleMatchRequest}>Dodaj utakmicu</button>
            </div>
            </div>
        )}
       </>
    );
}

export default Match;