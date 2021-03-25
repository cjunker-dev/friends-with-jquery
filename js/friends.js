let friends = [];




$().ready(() => {
    $("#add").click(() => {
        //reads value out of HTML where id = name and stores as a value
        let name = $("#name").val();
        let email = $("#email").val();
        let phone = $("#phone").val();
        let friend = {
            name: name, email: email, phone: phone
        };
        friends.push(friend);
        display();
    });
});

const display = () => {
    let tbody = $("tbody");
    tbody.empty();
    for(let friend of friends){
        let tr = $("<tr></tr>");
        let tdName = $(`<td>${friend.name}</td>`);
        tr.append(tdName);
        let tdEmail = $(`<td>${friend.email}</td>`);
        tr.append(tdEmail);
        let tdPhone = $(`<td>${friend.phone}</td>`);
        tr.append(tdPhone);
        tbody.append(tr);
    }
}