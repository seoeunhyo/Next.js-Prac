


export default function CustomersNickname({params, searchParams}){
    console.log(params)
    const information = params.information || []
    
    return(
        <main
            className='flex min-h-screen flex-col items-center p-24'
        >
            {information.length === 0 ?
        <p> 환영합니다.</p> : 
        <>
        <p>nickname들을 보여주겠습니다.</p>    
        <ul>
            {information.map((segment, index) => (
                <li key={index}>{segment}</li>
            ))} 
        </ul>
        </> 
        }
        </main>
    )
}