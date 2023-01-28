
//search user
// export const SearchUserData=({data})=>
//     Http.post(`http://localhost:3001/user/search`, {search:data})

   export const SearchUserData = async ({data}) => {
        const response = await fetch(
          `http://localhost:3001/users/search`,
          {
            method: "POST",
            // headers: {
            //   Authorization: `Bearer ${token}`,
            //   "Content-Type": "application/json",
            // },
          },
          {search:data}
        );
        console.log(response)
        // const data = await response.json();
        // dispatch(setFriends({ friends: data }));
        
      };