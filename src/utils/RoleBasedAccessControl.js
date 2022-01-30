class RoleBasedAccessControl {

    isPlayer(user){
        let player = false;
        if (user){
            user.roles.forEach(role => {
                // If user is a player
                if (role.role.name === 'player'){
                    player = true;
                }
            });
        }
        return player;
    }

    isCoach(user){
        let agent = false;
        if (user){
            user.roles.forEach(role => {
                // If user is a player
                if (role.role.name === 'agent'){
                    agent = true;
                }
            });
        }
        return agent;
    }

    isNewUser(user){
        let newUser = false;
        if (user){
            user.roles.forEach(role => {
                // If user is a player
                if (role.role.name === 'new-user'){
                    newUser = true;
                }
            });
        }
        return newUser;
    }


    hasRole(user, role){
        let roleStatus = false;
        if (user){
            user.roles.forEach(role => {
                // If user is a player
                if (role.role.name === role){
                    roleStatus = true;
                }
            });
        }
        return roleStatus;
    }


}

export default new RoleBasedAccessControl