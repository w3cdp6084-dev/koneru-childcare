export const SearchField:VFC = () => {
    const [value, setValue] = useRecoilState(searchValue);
    const router = useRouter();

    const onChangeValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },[]);

    const handleClickSubmitButton = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push(`/search/?keyword=${value}`);
      },
      [value, router]
    );

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        router.push(`/search/?keyword=${value}`)
      }
    }, [value,router]);

    return (
      <form className="flex flex-col items-center space-y-2 mb-3 surface:flex-row surface:justify-center surface:space-y-0 surface:space-x-2">
        <SearchInput value={value} onChange={onChangeValue} onKeyDown={handleKeyDown}/>
        <SubmitButton onClick={handleClickSubmitButton} />
      </form>
    );
}