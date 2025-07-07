"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Download, Smartphone } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#1e2a4a] text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="bg-white text-[#1e2a4a] px-4 py-2 rounded-full font-bold text-lg inline-block mb-4">
              pddle
            </div>
            <p className="mt-4 text-white/70 leading-relaxed">{t("footer.description")}</p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-white/70 hover:text-[#e85a4f] transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-white/70 hover:text-[#e85a4f] transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-white/70 hover:text-[#e85a4f] transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.quickAccess")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/locations" className="text-white/70 hover:text-[#e85a4f] transition-colors">
                  {t("footer.findLocations")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-[#e85a4f] transition-colors">
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.getApp")}</h3>
            <div className="space-y-3">
              <Link
                href="#"
                className="flex items-center bg-white/10 hover:bg-white/20 px-4 py-3 rounded-xl transition-colors"
              >
                <Smartphone className="w-6 h-6 mr-3" />
                <div>
                  <div className="text-xs text-white/70">{t("footer.downloadOn")}</div>
                  <div className="text-sm font-semibold">{t("footer.appStore")}</div>
                </div>
              </Link>
              <Link
                href="#"
                className="flex items-center bg-white/10 hover:bg-white/20 px-4 py-3 rounded-xl transition-colors"
              >
                <Download className="w-6 h-6 mr-3" />
                <div>
                  <div className="text-xs text-white/70">{t("footer.getItOn")}</div>
                  <div className="text-sm font-semibold">{t("footer.googlePlay")}</div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/70">
          <p>
            &copy; {new Date().getFullYear()} pddle. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
