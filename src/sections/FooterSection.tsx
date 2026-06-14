export default function FooterSection() {
  return (
    <footer className="py-8 px-4 text-center text-gray-600 text-sm border-t border-white/5 relative z-10">
      <p>&copy; {new Date().getFullYear()} Open Changer. Все права защищены.</p>
      <p className="mt-2 text-xs">
        Open Changer не аффилирован с Valve Corporation. Dota 2 является торговой маркой Valve Corporation.
      </p>
    </footer>
  );
}
