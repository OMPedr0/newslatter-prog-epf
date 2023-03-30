import { useState } from 'react';
import { useRouter } from 'next/router';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleRegister = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const auth = getAuth();
            await createUserWithEmailAndPassword(auth, email, password);
            router.push('/news');
        } catch (error: any) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Este e-mail já está em uso. Por favor, tente novamente com um e-mail diferente ou redefina sua senha.');
            } else {
                console.error('Error signing up with email and password', error);
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-8">Register</h1>
            <form className="w-full max-w-sm" onSubmit={handleRegister}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
}
export default Register;