const horariosDisponiveis = [
    "08:00", "09:00", "10:00", "11:00",
    "13:00", "14:00", "15:00", "16:00"
];
const dataInput = document.getElementById("data");
const horarioSelect = document.getElementById("horario");
const form = document.getElementById("agendamento-form");
const resumoDiv = document.getElementById("resumo-agendamento");

dataInput.addEventListener("change", () => {
    horarioSelect.innerHTML = "";
    horariosDisponiveis.forEach(horario => {
        const option = document.createElement("option");
        option.value = horario;
        option.textContent = horario;
        horarioSelect.appendChild(option);
    });
});
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = dataInput.value;
    const horario = horarioSelect.value;
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;

    if (!data || !horario || !nome || !telefone || !email) {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    resumoDiv.innerHTML = `
        <h3>Agendamento Confirmado!</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Data:</strong> ${data}</p>
        <p><strong>Horário:</strong> ${horario}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Email:</strong> ${email}</p>
    `;
    form.reset();
    horarioSelect.innerHTML = "<option value=''>Selecione uma data primeiro</option>";
});
