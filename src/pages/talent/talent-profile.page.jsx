import React, {useEffect, useState} from "react";
import TalentProfileComponent from "../../components/talent/talent-profile/talent-profile.component";
import SpinnerComponent from "../../components/spinners/page-spinner-component/spinner.component";
import Player from "../../backend/Player";

// SweetAlert
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import PageSpinner from "../../components/spinners/page-spinner.component";
const notify = withReactContent(Swal);

const TalentProfilePage = ({ match }) => {
    const [player, setPlayer] = useState(null);

    useEffect(() => {
        async function fetchPlayer() {
            if (player === null) {
                await fetchPlayerProfile();
            }
        }
        fetchPlayer();
    });

    const fetchPlayerProfile = async () => {
        console.log(match.params.player_id)
        await Player.fetchPlayerProfile(match.params.player_id).then(response => {
            setPlayer(response.data.data.data);
        }).catch(error => {
            notify.fire({
                icon: 'error',
                title: 'Talent Error',
                text: 'Unable to fetch talent',
                showConfirmButton: true,
                confirmButtonColor: '#00a01e',
            });
        })
    }

    return (
      <div>
          {
              (player)? <TalentProfileComponent player={player} />:<SpinnerComponent />
          }

      </div>
    );
}

export default TalentProfilePage;