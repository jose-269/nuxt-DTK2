const htmlFavorite = `
<div>
<table
	width="450"
	cellspacing="0"
	align="center"
	style="
		border-collapse: collapse;
		border-style: solid;
		border-width: 1px;
		border-color: black;
		font-family: open sans;
		margin: 0 auto;
		font-weight: 600 !important;
		width: 600px;
	"
>
	<thead style="background-color: white">
		<td colspan="2">
			<center>
				<img
					style="text-align: center !important; margin: 0 auto"
					src="~/static/img/logoEmail.png"
					alt="Logo"
					width="200"
				/>
			</center>
		</td>
		<tr>
			<td colspan="2">
				<hr style="width: 80%" />
			</td>
		</tr>
	</thead>
	<td>
		<center>
			<table
				width="600"
				style="
					margin-top: 15px;
					margin-bottom: 15px;
					background-color: #f1f1f1;
					border-radius: 12px;
				"
			>
				<tr>
					<td colspan="2" align="center" style="padding-left: 25px; padding-right: 25px">
						<h2
							style="color: #ea3900; border-bottom: 3px; font-weight: 600"
						>
							<strong>Alerta de Favoritos </strong>
						</h2>
						<p>Has recibido una alerta de favorito.</p>
						<p>Los datos son los siguientes:</p>
					</td>
				</tr>
				<td>
					
				</td>
				<tr style="line-height: 3px">
					<td align="center" style="padding-left: 25px">
						<strong>Nombre Completo:</strong>
					</td>
					<td align="center" style="padding-right: 25px">
						<p>{{fullName}}</p>
					</td>
				</tr>
				<tr style="line-height: 3px">
					<td align="center" style="padding-left: 25px"><strong>Rut:</strong></td>
					<td align="center" style="padding-right: 25px">
						<p>rut</p>
					</td>
				</tr>
				<tr style="line-height: 3px">
					<td align="center" td style="padding-left: 25px">
						<strong>Correo electrónico:</strong>
					</td>
					<td align="center" style="padding-right: 25px">
						<p>{{email}}</p>
					</td>
				</tr>
				<tr style="line-height: 3px">
					<td align="center" style="padding-left: 25px"><strong>Teléfono:</strong></td>
					<td align="center" style="padding-right: 25px">
						<p>{{phone}}</p>
					</td>
				</tr>
				<tr style="line-height: 3px">
					<td align="center" align="center" style="padding-left: 25px"><strong>Modelo:</strong></td>
					<td align="center" align="center" style="padding-right: 25px">
						<p>asd</p>
					</td>
				</tr>
				<tr style="line-height: 3px">
					<td align="center" style="padding-left: 25px">
						<strong>Tipo de mantención:</strong>
					</td>
					<td align="center" style="padding-right: 25px">
						<p>[mantencion]</p>
					</td>
				</tr>
				<tr style="line-height: 3px">
					<td align="center" style="padding-left: 25px"><strong>Fecha:</strong></td>
					<td align="center" style="padding-right: 25px">
						<p>asdasd</p>
					</td>
				</tr>
				<tr style="line-height: 3px">
					<td align="center" style="padding-left: 25px"><strong>Hora:</strong></td>
					<td align="center" style="padding-right: 25px">
						<p>asdasd</p>
					</td>
				</tr>
			</table>
	</td>
	<tr>
		<td colspan="2">
			<p style="text-align: center; font-weight: 600; font-size: 11px">
				Desarrollado por
				<a style="color: green" href="https://agenciadestacados.cl"
					>Agencia Destacados</a
				>
			</p>
		</td>
	</tr>
</table>
</div>
`

export const generateFavoriteHtml = (favorite) => {

	const values = {
		fullName: favorite.fullName ?? '',
		// rut: favorite.rut ?? '',
		phone: favorite.phone ?? '',
		email: favorite.email ?? '',
	}

	let html = htmlFavorite;

	// recorer las variables
	for ( const key of Object.keys(values)) {
		html = html.replace(`{{${key}}}`, values[key]);
	}

	return html;
}