// Write your code here

import './index.css'

const LanguageFilterItem = props => {
  const {
    isSelected,
    languageFilter,
    setSelectedLanguageFilterAndGetRepositories,
  } = props
  const className = isSelected ? 'list-item color-item' : 'list-item'
  const {id, language} = languageFilter

  const onCLickLanguage = () => {
    setSelectedLanguageFilterAndGetRepositories(id)
  }
  return (
    <li className={className}>
      <button type="button" className="list-button" onClick={onCLickLanguage}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem