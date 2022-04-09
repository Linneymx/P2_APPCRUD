window.addEventListener('load', () => {
	const form = document.querySelector("#NT-form");
	const input = document.querySelector("#NT-input");
	const list_el = document.querySelector("#tareas");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const tarea = input.value;

		const tarea_el = document.createElement('div');
		tarea_el.classList.add('task');

		const tarea_content_el = document.createElement('div');
		tarea_content_el.classList.add('content');

		tarea_el.appendChild(tarea_content_el);

		const tarea_input_el = document.createElement('input');
		tarea_input_el.classList.add('text');
		tarea_input_el.type = 'text';
		tarea_input_el.value = task;
		tarea_input_el.setAttribute('readonly', 'readonly');

		tarea_content_el.appendChild(task_input_el);

		const tarea_actions_el = document.createElement('div');
		tarea_actions_el.classList.add('actions');
		
		const tarea_edit_el = document.createElement('button');
		tarea_edit_el.classList.add('edit');
		tarea_edit_el.innerText = 'Editar';

		const tarea_delete_el = document.createElement('button');
		tarea_delete_el.classList.add('Eliminar');
		tarea_delete_el.innerText = 'Borrar';

		tarea_actions_el.appendChild(task_edit_el);
		tarea_actions_el.appendChild(task_delete_el);

		tarea_el.appendChild(task_actions_el);

		tarea_el.appendChild(task_el);

		input.value = '';

		tarea_edit_el.addEventListener('click', (e) => {
			if (tarea_edit_el.innerText.toLowerCase() == "edit") {
				tarea_edit_el.innerText = "Guardar";
				tarea_input_el.removeAttribute("readonly");
				tarea_input_el.focus();
			} else {
				tarea_edit_el.innerText = "Editar";
				tarea_input_el.setAttribute("readonly", "readonly");
			}
		});

		tarea_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(tarea_el);
		});
	});
});