
import { Check } from 'lucide-react';

const Checkbox = ({ title, description, checked, onChange }) => {
  return (
    <label className="flex items-start gap-3 cursor-pointer select-none">
      <div className="relative flex items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="peer sr-only"
        />
        <div className="h-5 w-5 border-2 border-slate-600 rounded bg-slate-900 flex items-center justify-center transition-all peer-checked:border-emerald-500 peer-checked:bg-emerald-500 peer-focus:ring-2 peer-focus:ring-emerald-500/20">
          <Check 
            className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" 
            strokeWidth={3}
          />
        </div>
      </div>
      
      <div className="flex flex-col gap-1">
        <span className="text-sm text-white font-medium leading-tight">
          {title}
        </span>
        {description && (
          <span className="text-xs text-slate-400 font-light leading-tight max-w-md">
            {description}
          </span>
        )}
      </div>
    </label>
  );
};

export default Checkbox;