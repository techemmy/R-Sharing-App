export async function signUpAction({ request, params }) {
  const formData = await request.formData();
  console.log("Form data:", formData);
  return { hello: "hello" };
}
