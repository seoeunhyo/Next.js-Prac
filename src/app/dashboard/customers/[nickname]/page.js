


export default function CustomersNickname({params, searchParams}){
    const {nickname } = params
    return(
        <main
            className='flex min-h-screen flex-col items-center p-24'
        >
            어떤 유저의 정보 표시할까요? <b>{nickname}</b>
        </main>
    )
}