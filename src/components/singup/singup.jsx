import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useRegister from "../../API/register";

function Signup() {
  const [nomeFuncionario, setNomeFuncionario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { data, error, loading, fetchData } = useRegister();
  const navigate = useNavigate();

  const emailHandleChange = (e) => {
    setEmail(e.target.value);
  };

  const senhaHandleChange = (e) => {
    setSenha(e.target.value);
  };

  const nomeFuncionarioHandleChange = (e) => {
    setNomeFuncionario(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchData("col", nomeFuncionario, email, senha);
  };

  useEffect(() => {
    console.log(data)
    if (data) {
      if (data.message === "Account succesfully created") {
        navigate("/login")
      }
    }
  }, [data])
    //       navigate("/login")
  // Utiliza useEffect para monitorar mudanças em 'data', 'error' ou 'loading'
  // useEffect(() => {
  //   if (data) {
  //     if (data.message == "Registrado com sucesso") {
  //       navigate("/login");
  //     }
  //   }
  // }, [data]);

  return (
    <section>
      <div className="flex items-center justify-center h-screen">
        <div className="w-full p-8 lg:p-36 md:p-52 sm:20 lg:w-1/2">
          
        <button className="flex mb-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9.57 5.92999L3.5 12L9.57 18.07" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.4999 12H3.66992" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <a href="/">Voltar</a>
          </button>

          <h1 className="my-5 text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">Signup</h1>
          <p className="mb-4 text-gray-600 text-md">Cadastre-se com um email e senha</p>

          <hr className="h-px my-5 bg-gray-200 border-0" />

          <form onSubmit={handleSubmit} method="POST">
            <div className="mb-4">
              <label className="block mb-2 text-gray-600">
                Nome
              </label>
              <input
                placeholder="Digite seu nome"
                type="text"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-700"
                autoComplete="on"
                onChange={nomeFuncionarioHandleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-gray-600">
                Email
              </label>
              <input
                placeholder="email@exemple.com"
                type="text"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-700"
                autoComplete="on"
                onChange={emailHandleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-600">
                Senha
              </label>
              <input
                placeholder="Min 8 caracteres"
                type="password"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-700"
                autoComplete="on"
                onChange={senhaHandleChange}
              />
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="text-blue-500"
              />
              <label className="ml-2 text-gray-600">
                Continuar logado
              </label>
            </div>
            <div className="mb-6 text-blue-500">
              <Link to="/login" className="text-indigo-700 hover:underline">
                Já tenho uma conta
              </Link>
            </div>
            <button
              type="submit"
              className="w-full px-5 py-2.5 font-semibold text-center text-white duration-300 ease-out rounded-lg bg-indigo-600 from-purple-500 to-indigo-700 hover:shadow-lg hover:bg-indigo-800"
            >
              Cadastre-se
            </button>
          </form>

        </div>
        <div className="hidden w-1/2 h-screen lg:block">
          <img
            src="https://i.ibb.co/b1Vpq7f/Background-5-4.png"
            className="object-cover w-full h-full rounded-bl-[128px]"
            alt="Background Image"
          />
        </div>
      </div>
    </section>

  )
}

export default Signup