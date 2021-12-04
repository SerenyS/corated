<template>
<div>
     <table class="table table-hover table-xl mb-0">
         <thead>
                  <tr>
                    <th>Team Name</th>
                    <th>Team Members</th>
                    
                  </tr>
        </thead>

         <tbody>
                  <tr>
                    <td class="text-truncate">Project X</td>
                    <td class="text-truncate">
                      <ul class="list-unstyled order-list m-b-0">
                        <li class="team-member team-member-sm"><img class="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="user" data-toggle="tooltip" title="" data-original-title="Wildan Ahdian"></li>
                        <li class="team-member team-member-sm"><img class="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="user" data-toggle="tooltip" title="" data-original-title="John Deo"></li>
                        <li class="team-member team-member-sm"><img class="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="user" data-toggle="tooltip" title="" data-original-title="Sarah Smith"></li>
                      </ul>
                    </td>
                   
                  </tr>
         </tbody>
     </table>


</div>
</template>

<script>
export default {

}
</script>

<style >

.table .table-img img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 2px solid #bbbbbb;
    -webkit-box-shadow: 5px 6px 15px 0px rgba(49,47,49,0.5);
    -moz-box-shadow: 5px 6px 15px 0px rgba(49,47,49,0.5);
    -ms-box-shadow: 5px 6px 15px 0px rgba(49,47,49,0.5);
    box-shadow: 5px 6px 15px 0px rgba(49,47,49,0.5);
    text-shadow: 0 0 black;
}

.table .team-member-sm {
    width: 32px;
    -webkit-transition: all 0.25s ease;
    -o-transition: all 0.25s ease;
    -moz-transition: all 0.25s ease;
    transition: all 0.25s ease;
}
.table .team-member {
    position: relative;
    width: 30px;
    white-space: nowrap;
    border-radius: 1000px;
    vertical-align: bottom;
    display: inline-block;
}

.table .order-list li img {
    border: 2px solid #ffffff;
    box-shadow: 4px 3px 6px 0 rgba(0,0,0,0.2);
}
.table .team-member img {
    width: 100%;
    max-width: 100%;
    height: auto;
    border: 0;
    border-radius: 1000px;
}
</style>