function follow(fields) {
    fetch(`/api/follows/follow/${fields.followedUsername}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
        .then(showResponse)
        .catch(showResponse);
}

function unfollow(fields) {
    fetch(`/api/follows/unfollow/${fields.followedUsername}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
        .then(showResponse)
        .catch(showResponse);
}