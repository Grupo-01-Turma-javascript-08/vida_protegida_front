import { Shield, Eye } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/AuthContextOnly";
import { AlertCircle, EyeOff } from "lucide-react";



interface RegisterPageProps {
  setCurrentPage: (page: string) => void;
}

export const Cadastro: React.FC<RegisterPageProps> = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birthDate: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  const [isEligible, setIsEligible] = useState<boolean | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register, isLoading } = useAuth();

  const calculateAge = (birthDate: string): number => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    
    return age;
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Verificar eligibilidade quando a data de nascimento for alterada
    if (field === 'birthDate' && typeof value === 'string' && value) {
      const age = calculateAge(value);
      setIsEligible(age >= 18);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.birthDate || !formData.password || !formData.confirmPassword) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }

    if (isEligible === false) {
      toast.error('Não elegível para este tipo de seguro');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('As senhas não coincidem');
      return;
    }

    if (formData.password.length < 6) {
      toast.error('A senha deve ter pelo menos 6 caracteres');
      return;
    }

    if (!formData.acceptTerms) {
      toast.error('Você deve aceitar os termos e condições');
      return;
    }

    const success = await register(formData.name, formData.email, formData.password, formData.birthDate);
    
    if (success) {
      toast.success('Cadastro realizado com sucesso!');
      setCurrentPage('home');
    } else {
      toast.error('Erro ao criar conta. Tente novamente.');
    }
  };
  return (
    <div className="max-w-md mx-auto">
      <div className="p-8 bg-white rounded shadow">
        <div className="text-center mb-6">
          <Shield className="h-12 w-12 text-[#38bdf8] mx-auto mb-4" />
          <h1 className="text-[#334155] mb-2">Criar conta</h1>
          <p className="text-[#334155]/70">Junte-se à VidaSegura hoje mesmo</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-[#334155]">Nome completo</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Seu nome completo"
              className="border border-[#38bdf8]/30 focus:border-[#38bdf8] px-3 py-2 rounded w-full"
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-[#334155]">Email</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="seu@email.com"
              className="border border-[#38bdf8]/30 focus:border-[#38bdf8] px-3 py-2 rounded w-full"
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="birthDate" className="text-[#334155]">Data de nascimento</label>
            <input
              id="birthDate"
              type="date"
              value={formData.birthDate}
              onChange={(e) => handleInputChange('birthDate', e.target.value)}
              className="border border-[#38bdf8]/30 focus:border-[#38bdf8] px-3 py-2 rounded w-full"
              disabled={isLoading}
              max={new Date().toISOString().split('T')[0]}
            />
            {isEligible === false && (
              <div className="flex items-center gap-2 border border-red-200 bg-red-50 rounded p-2 mt-1">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <span className="text-red-800 text-sm">Não elegível para este tipo de seguro.</span>
              </div>
            )}
            {isEligible === true && formData.birthDate && (
              <p className="text-sm text-green-600">
                ✓ Elegível para contratar seguro de vida
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-[#334155]">Senha</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                placeholder="Mínimo 6 caracteres"
                className="border border-[#38bdf8]/30 focus:border-[#38bdf8] pr-10 px-3 py-2 rounded w-full"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#334155]/50 hover:text-[#334155]"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="text-[#334155]">Confirmar senha</label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                placeholder="Digite a senha novamente"
                className="border border-[#38bdf8]/30 focus:border-[#38bdf8] pr-10 px-3 py-2 rounded w-full"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#334155]/50 hover:text-[#334155]"
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <input
              id="terms"
              type="checkbox"
              checked={formData.acceptTerms}
              onChange={(e) => handleInputChange('acceptTerms', e.target.checked)}
              className="border border-[#38bdf8]/30 accent-[#38bdf8] mr-2"
            />
            <label htmlFor="terms" className="text-sm text-[#334155]/70 leading-5">
              Aceito os{' '}
              <button type="button" className="text-[#38bdf8] hover:underline">
                termos e condições
              </button>{' '}
              e a{' '}
              <button type="button" className="text-[#38bdf8] hover:underline">
                política de privacidade
              </button>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#38bdf8] hover:bg-[#0ea5e9] text-white py-2 rounded"
            disabled={isLoading || isEligible === false}
          >
            {isLoading ? 'Criando conta...' : 'Criar conta'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-[#334155]/70">
            Já tem uma conta?{' '}
            <button 
              onClick={() => setCurrentPage('login')}
              className="text-[#38bdf8] hover:underline"
            >
              Faça login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;