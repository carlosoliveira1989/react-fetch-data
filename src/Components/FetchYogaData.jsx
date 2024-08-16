import UseFetch from './UseFetch';
import './FetchData.css'

const FetchYogaData = () => {
  const [data]=UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
  console.log(data)
  return (
    <>
      <h2>Yoga Benefits</h2>
      <ul className='list_data_main'>
        {data && data.map((e)=>(
          <li className='list_data'>
            <h3>{e.name}</h3>            
            <p><strong>Benefits: </strong>{e.benefits}</p>
            <p><strong>Time duration: </strong>{e.time_duration}</p>
          </li>
        ))}
      </ul>
    </>
  )

}

export default FetchYogaData