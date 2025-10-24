// ======================================================
// FUNCIÓN PRINCIPAL: Calcular_Consumo()
// ======================================================
// Calcula el costo energético total, el consumo y costo diario,
// y estima cuántos paneles solares se necesitan según el consumo.
function Calcular_Consumo() {
  // 1️⃣ Capturamos los valores desde el formulario
  const consumo_mensual = parseFloat(document.getElementById("consumo_mensual").value);
  const costo_kwh = parseFloat(document.getElementById("costo_kwh").value);

  // 2️⃣ Validaciones básicas
  if (!Number.isFinite(consumo_mensual) || !Number.isFinite(costo_kwh)) {
    alert("⚠️ Por favor ingresa valores numéricos válidos.");
    return;
  }
  if (consumo_mensual <= 0 || costo_kwh <= 0) {
    alert("⚠️ Los valores deben ser mayores que 0.");
    return;
  }

  // 3️⃣ Cálculos de consumo y costos
  const total = consumo_mensual * costo_kwh;
  document.getElementById("resultado").innerText = `💰 Costo mensual: $${total.toFixed(2)}`;

  const consumo_diario = consumo_mensual / 30;
  document.getElementById("consumo_diario").innerText = `📊 Consumo diario: ${consumo_diario.toFixed(2)} kWh`;

  const costo_diario = consumo_diario * costo_kwh;
  document.getElementById("costo_diario").innerText = `💵 Costo diario: $${costo_diario.toFixed(2)}`;

  // 4️⃣ Estimación de paneles solares
  // Supuestos: 1 panel de 400 Wp produce ~48 kWh/mes.
  const kwhPorPanelMes = 48;
  const panelesRequeridos = Math.ceil(consumo_mensual / kwhPorPanelMes);

  // 5️⃣ Mensaje adicional según rangos de consumo
  let sugerencia = "";
  if (consumo_mensual <= 200) {
    sugerencia = "Para este consumo se recomienda una instalación residencial pequeña (4 paneles).";
  } else if (consumo_mensual <= 400) {
    sugerencia = "Una instalación media de 6 a 9 paneles cubriría tu consumo.";
  } else {
    sugerencia = "Requiere una instalación avanzada, con asesoría técnica (10+ paneles).";
  }

  // 6️⃣ Mostramos resultado en un popup (concepto visto en clase)
  const mensaje = `
🔆 Estimación de paneles solares

• Consumo mensual: ${consumo_mensual.toFixed(2)} kWh
• Costo mensual: $${total.toFixed(2)}
• Paneles requeridos (100% cobertura): ${panelesRequeridos}

💡 ${sugerencia}

*Nota:* Este cálculo es aproximado y puede variar según ubicación y clima.
  `;
  alert(mensaje);

  // También lo registramos en consola para pruebas
  console.log(mensaje);
}
