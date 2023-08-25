function skillsMember() {
    const members = document.querySelectorAll('.member');
    const skills = document.querySelectorAll('.skill');
    const skillText = document.querySelectorAll('.skill-text');
    const skillIcon = document.querySelectorAll('.skill-icon');
    const skillIconImg = document.querySelectorAll('.skill-icon img');
    const skillIconText = document.querySelectorAll('.skill-icon p');

    const memberSkills = {
        'member-1': ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'WordPress', 'Bootstrap'],
        'member-2': ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'WordPress', 'Bootstrap'],
        'member-3': ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'WordPress', 'Bootstrap'],
        'member-4': ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'WordPress', 'Bootstrap'],
        'member-5': ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'WordPress', 'Bootstrap'],
        'member-6': ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'WordPress', 'Bootstrap'],
        'member-7': ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'WordPress', 'Bootstrap'],
        'member-8': ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'WordPress', 'Bootstrap'],
    }

    members.forEach(member => {
        member.addEventListener('click', () => {
            const memberSkillsArr = memberSkills[member.id];
            skills.forEach(skill => {
                skill.classList.remove('active');
            });
            skillText.forEach(skill => {
                skill.classList.remove('active');
            });
            skillIcon.forEach(skill => {
                skill.classList.remove('active');
            });
            skillIconImg.forEach(skill => {
                skill.classList.remove('active');
            });
            skillIconText.forEach(skill => {
                skill.classList.remove('active');
            });
            memberSkillsArr.forEach(skill => {
                document.getElementById(skill).classList.add('active');
            });
        });
    });
}