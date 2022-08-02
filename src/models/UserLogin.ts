interface UserLogin {

  nome: string;
  usuario: string;
  senha: string;
  foto: string;
  token?: string| null;
  id: number;

}

export default UserLogin;