import React, {useEffect, useState} from "react";
import TalentPoolComponent from "../../components/talent/talent-pool.component";
import SpinnerComponent from "../../components/spinners/page-spinner-component/spinner.component";

import Player from "../../backend/Player";
// SweetAlert
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import PageSpinner from "../../components/spinners/page-spinner.component";
const notify = withReactContent(Swal);

const TalentPoolPage = () => {
    const [talents, setTalents] = useState(null)
    useEffect(() => {
        async function fetchData() {
            if (talents === null){
                await fetchAllTalents();
                console.log(talents)
            }
        }
        fetchData();
    }, []);

    const fetchAllTalents = async () => {
        await Player.fetchAllPlayers().then(response => {
            setTalents(response.data)
        }).catch(error => {
            notify.fire({
                icon: 'error',
                title: 'Talent Error',
                text: 'Unable to fetch talents',
                showConfirmButton: true,
                confirmButtonColor: '#00a01e',
            });
        });
    }

    return (
        <div>
            {
                (talents)?<TalentPoolComponent talents={talents} />: <SpinnerComponent />
            }
        </div>

    );
}

export default TalentPoolPage;