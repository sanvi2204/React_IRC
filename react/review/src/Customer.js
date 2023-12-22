import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Customer = () => {
    const [custlist, custupdate] = useState([]);
    const [haveedit, editchange] = useState(false);
    const [haveview, viewchange] = useState(false);
    const [haveadd, addchange] = useState(false);
    const [haveremove, removechange] = useState(false);

    const navigate=useNavigate();


    useEffect(() => {
        GetUserAccess();
        loadcustomer();
       
    }, []);

    const loadcustomer = () => {
        fetch("http://localhost:8000/customer").then(res => {
            if (!res.ok) {
                return false
            }
            return res.json();
        }).then(res => {
            custupdate(res)
        });
    }

    const GetUserAccess = () => {
        const userrole = sessionStorage.getItem('userrole') != null ? sessionStorage.getItem('userrole').toString() : '';
        fetch("http://localhost:8000/roleaccess?role=" + userrole + "&menu=customer").then(res => {
            if (!res.ok) {
                navigate('/');
            toast.warning('You are not authorized to access');
                return false;
            }
            return res.json();
        }).then(res => {
            console.log(res);
            if (res.length > 0) {
                viewchange(true);
                let userobj = res[0];
                editchange(userobj.haveedit);
                addchange(userobj.haveadd);
                removechange(userobj.havedelete);
            }else{
                navigate('/');
            toast.warning('You are not authorized to access');
            }
        })
    }

    const handleadd = () => {
        if(haveadd){

const newData = {
    "id": 4,
    "code": 7,
    "name": "boult",
    "email": "bould@in.com"
  };

fetch("http://localhost:8000/customer", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(newData)
            }).then((res) => {
                console.log(res);
                loadcustomer();
                toast.success('added');
            }).catch((err) => {
                toast.error('Failed :' + err.message);
            });

        }else{
            toast.warning('You are not having access for add');
        }
    }
    const handleedit = () => {
        if(haveedit){
            const axios = require('axios');

// Specify the JSON Server URL
const jsonServerUrl = 'http://localhost:8000';

// Specify the resource and the ID of the item to update
const resource = 'customer';
const itemId = 2; // Replace with the actual ID you want to update

// New data to update the item

const updatedData = {
    "id": 2,
    "code": 7,
    "name": "sanvi",
    "email": "bould@in.com"
  };

// Perform the PATCH request to update the item
fetch(`${jsonServerUrl}/${resource}/${itemId}`, {
    method: "POST",
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(updatedData)
})
  .then(response => {
    loadcustomer();
    console.log(`Updated ${resource} with ID ${itemId}:`, response.data);
  })
  .catch(error => {
    console.error(`Error updating ${resource} with ID ${itemId}:`, error.response.data);
  });

        toast.success('edited')
        }
        else{
            toast.warning('You are not having access for Edit');
        }
    }

    const handleremove = () => {
        if(haveremove){
            const jsonServerUrl = 'http://localhost:8000';

// Specify the resource and the ID of the item to update
const resource = 'customer';
const itemId = 2; // Replace with the actual ID you want to update

// Perform the PATCH request to update the item
fetch(`${jsonServerUrl}/${resource}/${itemId}`, {
    method: "DELETE",
})
  .then(response => {
    loadcustomer();
    toast.success('removed')
    console.log(`Deleted ${resource} with ID ${itemId}:`, response.data);
  })
  .catch(error => {
    console.error(`Error updating ${resource} with ID ${itemId}:`, error.response.data);
  });
        }else{
            toast.warning('You are not having access for remove');
        }
    }


    return (
        <div className="container">

            <div className="card">
                <div className="card-header">
                    <h3>Customer Listing</h3>
                </div>
                <div className="card-body">
                    <button onClick={handleadd} className="btn btn-success">Add (+)</button>
                    <br></br>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>Code</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {custlist &&
                                custlist.map(item => (
                                    <tr key={item.code}>
                                        <td>{item.code}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <button onClick={handleedit} className="btn btn-primary">Edit</button> |
                                            <button onClick={handleremove} className="btn btn-danger">Remove</button>
                                        </td>

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Customer;