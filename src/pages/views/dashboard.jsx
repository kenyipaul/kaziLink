import Axios from "axios";
import {useEffect, useState} from "react";

export default function Dashboard() {

    const [jobs, setJobs] = useState([]);
    const [workers, setWorkers] = useState([]);
    const [employers, setEmployers] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const [verifiedUsers, setVerifiedUsers] = useState([]);

    useEffect(() => {

        Axios({
            method: "get",
            url: "http://localhost:9000/api/v1/users/employees",

        }).then((res) => {
            setEmployers(res.data.data);
        })

        Axios({
            method: "get",
            url: "http://localhost:9000/api/v1/users/workers",

        }).then((res) => {
            setWorkers(res.data.data);
        })


        Axios({
            method: "get",
            url: "http://localhost:9000/api/v1/jobs",

        }).then((res) => {
            if (res.data.status === "success") {
                setJobs(res.data.data.jobs);
            }
        })


    }, [])


    useEffect(() => {
        setAllUsers([...workers, ...employers]);
    }, [employers, workers]);

    useEffect(() => {

        const results = []

        allUsers.filter((user) => {
            if (user.verifyEmail === true) {
                user.push(results)
            }
        })

        setVerifiedUsers(results)

    }, [allUsers, setAllUsers]);

    return (
        <div className="dashboard-view">

            <div className="dashboard">
                <h2>Good Afternoon John!</h2>

                <div className="dash-reports">
                    <div className="report">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.21" fill-rule="evenodd" clip-rule="evenodd" d="M0 30V37C0 49.7025 10.2975 60 23 60H30H37C49.7025 60 60 49.7025 60 37V30V23C60 10.2975 49.7025 0 37 0H30H23C10.2975 0 0 10.2975 0 23V30Z" fill="#8280FF"/><path opacity="0.587821" fill-rule="evenodd" clip-rule="evenodd" d="M20.6667 23.3333C20.6667 26.2789 23.0545 28.6667 26 28.6667C28.9455 28.6667 31.3333 26.2789 31.3333 23.3333C31.3333 20.3878 28.9455 18 26 18C23.0545 18 20.6667 20.3878 20.6667 23.3333ZM34 28.6667C34 30.8758 35.7909 32.6667 38 32.6667C40.2091 32.6667 42 30.8758 42 28.6667C42 26.4575 40.2091 24.6667 38 24.6667C35.7909 24.6667 34 26.4575 34 28.6667Z" fill="#8280FF"/><path fill-rule="evenodd" clip-rule="evenodd" d="M25.9778 31.333C19.6826 31.333 14.5177 34.5684 14.0009 40.9319C13.9727 41.2786 14.6356 41.9997 14.97 41.9997H36.9956C37.9972 41.9997 38.0128 41.1936 37.9972 40.933C37.6065 34.3906 32.3616 31.333 25.9778 31.333ZM45.2746 41.9997L40.1333 41.9997C40.1333 38.9984 39.1417 36.2288 37.4683 34.0005C42.0103 34.0501 45.7189 36.3465 45.998 41.1997C46.0092 41.3951 45.998 41.9997 45.2746 41.9997Z" fill="#8280FF"/></svg>

                        <h1>{workers && workers.length}</h1>
                        <p>Total Workers</p>
                    </div>

                    <div className="report">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.21" fill-rule="evenodd" clip-rule="evenodd" d="M0 30V37C0 49.7025 10.2975 60 23 60H30H37C49.7025 60 60 49.7025 60 37V30V23C60 10.2975 49.7025 0 37 0H30H23C10.2975 0 0 10.2975 0 23V30Z" fill="#FEC53D"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15 24.3162L27.9005 31.7643C28.0394 31.8445 28.1851 31.9024 28.3333 31.9392V46.3844L15.9201 39.0382C15.3498 38.7007 15 38.0873 15 37.4246V24.3162ZM45 24.1182V37.4246C45 38.0873 44.6502 38.7007 44.0799 39.0382L31.6667 46.3844V31.8126C31.6969 31.7975 31.7269 31.7814 31.7566 31.7643L45 24.1182Z" fill="#FEC53D"/><path opacity="0.499209" fill-rule="evenodd" clip-rule="evenodd" d="M15.4052 20.7014C15.5628 20.5024 15.7617 20.3343 15.9936 20.2108L29.1186 13.2201C29.6695 12.9266 30.3305 12.9266 30.8814 13.2201L44.0064 20.2108C44.1852 20.306 44.3443 20.4277 44.48 20.5697L30.0899 28.8778C29.9953 28.9325 29.908 28.995 29.8285 29.064C29.749 28.995 29.6618 28.9325 29.5672 28.8778L15.4052 20.7014Z" fill="#FEC53D"/></svg>

                        <h1>{employers && employers.length}</h1>
                        <p>Total Employers</p>
                    </div>

                    <div className="report">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.21" fill-rule="evenodd" clip-rule="evenodd" d="M0 30V37C0 49.7025 10.2975 60 23 60H30H37C49.7025 60 60 49.7025 60 37V30V23C60 10.2975 49.7025 0 37 0H30H23C10.2975 0 0 10.2975 0 23V30Z" fill="#4AD991"/><path d="M19.1111 40.8889H42.4444C43.3036 40.8889 44 41.5853 44 42.4444C44 43.3036 43.3036 44 42.4444 44H17.5556C16.6964 44 16 43.3036 16 42.4444V17.5556C16 16.6964 16.6964 16 17.5556 16C18.4147 16 19.1111 16.6964 19.1111 17.5556V40.8889Z" fill="#4AD991"/><path opacity="0.5" d="M24.9126 34.175C24.325 34.8017 23.3406 34.8335 22.7139 34.2459C22.0871 33.6583 22.0554 32.6739 22.6429 32.0472L28.4763 25.8249C29.0445 25.2188 29.9888 25.1662 30.6208 25.7056L35.2249 29.6343L41.2235 22.0361C41.7559 21.3618 42.734 21.2467 43.4083 21.779C44.0826 22.3114 44.1977 23.2895 43.6654 23.9638L36.6654 32.8305C36.1186 33.5231 35.1059 33.6227 34.4347 33.0499L29.7306 29.0358L24.9126 34.175Z" fill="#4AD991"/></svg>

                        <h1>{jobs && jobs.length}</h1>
                        <p>Active Jobs</p>
                    </div>

                    <div className="report">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.21" fill-rule="evenodd" clip-rule="evenodd" d="M0 30V37C0 49.7025 10.2975 60 23 60H30H37C49.7025 60 60 49.7025 60 37V30V23C60 10.2975 49.7025 0 37 0H30H23C10.2975 0 0 10.2975 0 23V30Z" fill="#4AD991"/><path d="M19.1111 40.8889H42.4444C43.3036 40.8889 44 41.5853 44 42.4444C44 43.3036 43.3036 44 42.4444 44H17.5556C16.6964 44 16 43.3036 16 42.4444V17.5556C16 16.6964 16.6964 16 17.5556 16C18.4147 16 19.1111 16.6964 19.1111 17.5556V40.8889Z" fill="#4AD991"/><path opacity="0.5" d="M24.9126 34.175C24.325 34.8017 23.3406 34.8335 22.7139 34.2459C22.0871 33.6583 22.0554 32.6739 22.6429 32.0472L28.4763 25.8249C29.0445 25.2188 29.9888 25.1662 30.6208 25.7056L35.2249 29.6343L41.2235 22.0361C41.7559 21.3618 42.734 21.2467 43.4083 21.779C44.0826 22.3114 44.1977 23.2895 43.6654 23.9638L36.6654 32.8305C36.1186 33.5231 35.1059 33.6227 34.4347 33.0499L29.7306 29.0358L24.9126 34.175Z" fill="#4AD991"/></svg>

                        <h1>{verifiedUsers.length}</h1>
                        <p>Verified Users</p>
                    </div>
                </div>
            </div>


        </div>
    )
}