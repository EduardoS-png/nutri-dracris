import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contato" className="bg-cinza-dark py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-10 md:gap-14">
          <div>
            <h4 className="font-primary text-2xl font-semibold mb-2 text-branco">
              Cristina <span className="text-rosa">Carvalho</span>
            </h4>
            <p className="text-xs tracking-[0.3em] uppercase mb-6 text-cinza-light">
              Nutricionista
            </p>
            <p className="text-sm leading-relaxed text-cinza-light">
              Cuidando da sua saúde com ciência, empatia e dedicação. Seu
              bem-estar é a nossa missão.
            </p>
          </div>

          <div>
            <h5 className="font-primary text-lg font-semibold mb-4 text-branco">
              Contato
            </h5>
            <div className="space-y-4">
              <a
                href="tel:+5581981239275"
                className="flex items-center gap-3 text-sm transition-opacity hover:opacity-70 text-cinza-light"
              >
                <Phone size={18} style={{ color: "#8baf8a" }} />
                (81) 98123-9275
              </a>
              <a
                href="mailto:"
                className="flex items-center gap-3 text-sm transition-opacity hover:opacity-70 text-cinza-light"
              >
                <Mail size={18} style={{ color: "#8baf8a" }} />
              </a>
              <div className="flex items-start gap-3 text-sm text-cinza-light">
                <MapPin size={18} style={{ color: "#8baf8a" }} />
                <span>
                  Rua Exemplo, 123 - Bairro Exemplo
                  <br />
                  Caruaru - PE
                </span>
              </div>
            </div>
          </div>

          <div>
            <h5 className="font-primary text-lg font-semibold mb-4 text-branco">
              Redes Sociais
            </h5>
            <div className="flex gap-3">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-cinza-light rounded-xl flex items-center justify-center border border-transparent transition-all hover:shadow-md hover:border-rosa hover:scale-105"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    ry="5"
                    strokeWidth={2}
                  />
                  <circle cx="12" cy="12" r="4" strokeWidth={2} />
                  <circle
                    cx="17"
                    cy="7"
                    r="1.5"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
            </div>
            <p className="mt-4 text-xs text-cinza-light">
              CRN: 0000/0 - Registro Profissional
            </p>

            <h5 className="font-primary text-lg font-semibold my-4 text-branco">
              Atribuições
            </h5>
            <div className="flex gap-3">
              <a
                href="https://www.flaticon.com/br/icones-gratis/peso"
                title="peso ícones"
                className="text-sm transition-opacity hover:opacity-70 text-cinza-light"
              >
                Peso ícones criados por Darius Dan - Flaticon
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
