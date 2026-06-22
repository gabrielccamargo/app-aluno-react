export default function ProfileRows({ usuario }) {
  const rows = [
    ["Nome Completo", usuario.nome],
    ["Nome de Preferência", usuario.nomePreferencia],
    ["Endereço de E-mail", usuario.email],
    ["Matrícula / CPF", `***.***.***-${usuario.cpfFinal}`],
    ["Número de Telefone", usuario.telefone || "Não fornecido"],
  ];

  return (
    <dl className="profile-table">
      {rows.map(([label, value]) => (
        <div className="profile-table__row" key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
