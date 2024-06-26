import AdminDashboard from '../../components/AdminDashboard.jsx';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from './Table';
import { useNavigate } from 'react-router-dom';

const StudentData = () => {

    const [data , setData] = useState([{}]);
    const navigate = useNavigate();

    const handleCreateResource = () =>{
        navigate("/u2/createStudent");
    }



    useEffect(() => {
      const fetchData = async() => {
        await axios.get("http://localhost:8000/api/v1/user/studentData")
        .then((res) => {
          console.log("fetched dataa",res.data.data);
          return res.data.data;

        })
        .then((res) => {
          setData(res);
          console.log("data:",data);
        });
      };
      fetchData();
    },[]);


  return (
    <div>
        <AdminDashboard>
        <div>

<>
  <section className="mx-auto w-full max-w-7xl px-4 py-4">
    <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
      <div>
        <h2 className="text-lg font-semibold">Students</h2>
        <p className="mt-1 text-sm text-gray-700">
        </p>
      </div>

      <div className='flex sm:justify-between md:m-[100px] '>
      <div className='me-[10px]'>
        <button
          type="button"
          className=" rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={handleCreateResource}
        >
          Add new student
        </button>
        </div>
        <div>
        <button
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black "
          onClick={() => {navigate("/u2/createStudentFromExcel")}}
        >
          Add multiple students
        </button>


      </div>

      {/* <div>
        <button
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={handleCreateResource}
        >
          Add new student form excel
        </button>
      </div> */}
      </div>

    </div>
    <div className="mt-6 flex flex-col">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden border border-gray-200 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                  >
                    <span>Resource</span>
                  </th>
                  <th
                    scope="col"
                    className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                  >
                    Title
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                  >
                    Status
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                  >
                    Download link
                  </th>
                  <th scope="col" className="relative px-4 py-3.5">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {data.map((student) => (
                  <Table student={student}/>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</>




</div>
      </AdminDashboard>
    </div>
  )
}

export default StudentData
