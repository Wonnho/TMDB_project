function formHandler(e) {
  // Change our state
  // Store input's value in our state
  const inputValue = e.target.value;
  const key = e.target.name;
  setFormData({
    ...formData,
    [key]: inputValue,
  });
}

export { formHandler };
