import type { ComputedRef, Ref } from 'vue'
import type {
  Base as BasePlain,
  Head as HeadPlain,
  LinkEntries as LinkEntriesPlain,
  Link as LinkPlain,
  MetaEntries as MetaEntriesPlain,
  MetaFlat as MetaFlatPlain,
  Meta as MetaPlain,
  ScriptEntries as ScriptEntriesPlain,
  Script as ScriptPlain,
  NoscriptEntries as NoscriptEntriesPlain,
  Noscript as NoscriptPlain,
  StyleEntries as StyleEntriesPlain,
  Style as StylePlain,
  BodyAttributes as BodyAttributesPlain,
  HtmlAttributes as HtmlAttributesPlain
} from '@zhead/schema'

type MaybeRef<T> = T | Ref<T> | ComputedRef<T>

type MaybeRefDeep<T> = T extends string | boolean | number ? MaybeRef<T> :
  T extends Array<infer U> ? Array<MaybeRefDeep<U>> :
    T extends object ? {
      [key in keyof T]?: MaybeRefDeep<T[key]>
    } : MaybeRef<T>

export type Head = MaybeRefDeep<HeadPlain>
export type Link = MaybeRefDeep<LinkPlain>
export type LinkEntries = MaybeRefDeep<LinkEntriesPlain>
export type Script = MaybeRefDeep<ScriptPlain>
export type ScriptEntries = MaybeRefDeep<ScriptEntriesPlain>
export type Noscript = MaybeRefDeep<NoscriptPlain>
export type NoscriptEntries = MaybeRefDeep<NoscriptEntriesPlain>
export type Style = MaybeRefDeep<StylePlain>
export type StyleEntries = MaybeRefDeep<StyleEntriesPlain>
export type Meta = MaybeRefDeep<MetaPlain>
export type MetaEntries = MaybeRefDeep<MetaEntriesPlain>
export type Base = MaybeRefDeep<BasePlain>
export type MetaFlat = MaybeRefDeep<Partial<MetaFlatPlain>>
export type BodyAttributes = MaybeRefDeep<BodyAttributesPlain>
export type HtmlAttributes = MaybeRefDeep<HtmlAttributesPlain>
