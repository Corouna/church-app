## Placeholder path for multi language support
Locales should be only meant for **static** references
For data that is fetch from API, it is up to the backend to handle such payload

However, the locales payload should be similar, like so:
```json
{
  "language_1": {
    "component_specific_keys_here": "language 1 value here"
  },
  "language_2": {
    "component_specific_keys_here": "language 2 value here"
  },
}
```

TBD: Decide on the folder structure
