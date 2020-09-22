const $addSkill = $('#add-skill');

$addSkill.click(function(e) {
    // console.log(e, this);
    let $skillInput = $('.skill-input')[0].value;
    // console.log(inputSkill);

    const addedSkill = $(`
    <tr>
        <td>
            <button id="remove-skill" class="btn btn-xs btn-danger">X</button>
        </td>
        <td class="skill">${$skillInput}</td>
    </tr>
    `)

    $('table').append(addedSkill);
    $('.skill-input')[0].value = '';
});

$('#my-skills-div').on('click','button', function(e){
    // console.log('clicked Remove');
    $(this).closest('tr').remove();
})
