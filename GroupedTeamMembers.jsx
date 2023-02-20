import {useState} from "react";
const GroupedTeamMembers = ({employees, selectedTeam, setTeam}) => {

  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());
  
  function groupTeamMembers()
    {
      var teams = [];

      var teamAMembers = employees.filter((employee) => employee.teamName === 'Team A');
      var teamA = {team:'Team A',members:teamAMembers,collapsed: selectedTeam === 'Team A'?false:true}
      teams.push(teamA);

      var teamBMembers = employees.filter((employee) => employee.teamName === 'Team B');
      var teamB = {team:'Team B',members:teamBMembers,collapsed: selectedTeam === 'Team B'?false:true}
      teams.push(teamB);
      
      var teamCMembers = employees.filter((employee) => employee.teamName === 'Team C');
      var teamC = {team:'Team C',members:teamAMembers,collapsed: selectedTeam === 'Team C'?false:true}
      teams.push(teamC);

      var teamDMembers = employees.filter((employee) => employee.teamName === 'Team D');
      var teamD = {team:'Team D',members:teamDMembers,collapsed: selectedTeam === 'Team D'?false:true}
      teams.push(teamD);

      return teams;
    
    }

  function handleTeamClick(event){
      var transformedGroupData = groupedEmployees.map((groupedData)=> groupedData.team === event.currentTarget.id
                                            ?{...groupedData, collapsed:!groupedData.collapsed}:groupedData);
    setGroupedData(transformedGroupedData);
    setTeam(event.currentTarget.id);
  }
  
  return (
    <main className= "container">
      {
        groupedEmployees.map((item)=> {
          return (
            <div key ={item.team} className='card mt-2' style={{cursor:"pointer"}}>
              <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
                  Team Name: {item.team}
              </h4>
              <div id ={"collapse_" + item.team}
                      className={item.collapsed === true?"collapse" : ""}>
                <hr/>
                {
                    item.members.map(member => {
                        return (
                          <div className="mt-2">
                            <h5 className="card-title mt-2">
                              <span className="text-dark">Full Name: {member.fullName}</span>
                            </h5>
                            <p>Designation: {member.designation}</p>
                          </div>
                        );
                    })
                }
              </div>
            </div>
          )
        })
      }
    </main>
  )
    
}
export default GroupedTeamMembers
