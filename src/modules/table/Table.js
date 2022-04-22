import React from 'react';
import SEO from '../../shared/components/seo/SEO';

const Table = () =>{

    const[table, setTable] = React.useState({data:[]});

    React.useEffect(()=>{
        fetch("http://localhost:57902/api/Team")
        .then(response => response.json())
        .then(response =>{
            setTable({...table,data: response});
        })
    },[]);
    

    return(
    <>
    <SEO title="Tabela" description="Ovo je tabela super lige" url="/tabela"/>
    <div className='flex justify-center'>
        <div className='flex flex-col border-2 border-primary-border p-4 rounded-lg mt-12'>
            <span className='font-bold text-3xl bg-header-table-background p-1 rounded'>Tabela</span>
            <div>
                <div className=''>
                    <span className='pr-20 font-bold'>Tim</span>
                    <span className='pr-12 font-bold'>P</span>
                    <span className='pr-12 font-bold'>N</span>
                    <span className='pr-12 font-bold'>I</span>
                    <span className='pr-12 font-bold'>DG</span>
                    <span className='pr-12 font-bold'>PG</span>
                    <span className='pr-12 font-bold'>B</span>
                </div>
                {!!table && !!table.data && table.data.map((table, index)=>(
                
                <div key={index} className="flex flex-row">
                        <div className='pr-12 font-semibold'>{table.name}</div>
                        <div className='pr-12 font-semibold'>{table.wins}</div>
                        <div className='pr-12 font-semibold'>{table.draws}</div>
                        <div className='pr-14 font-semibold'>{table.losses}</div>
                        <div className='pr-14 font-semibold'>{table.goalsFor}</div>
                        <div className='pr-14 font-semibold'>{table.goalsAgainst}</div>
                        <div className='pr-12 font-semibold'>{table.points}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </>);
}

export default Table;