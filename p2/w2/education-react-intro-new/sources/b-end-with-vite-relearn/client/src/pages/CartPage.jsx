import { useNavigate } from 'react-router';
import CartView from '../components/CartView';

export default function CartPage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto bg-slate-800/60 border border-slate-700/70 rounded-2xl p-6 md:p-8">
      <CartView onClose={() => navigate('/')} />
    </div>
  );
}
