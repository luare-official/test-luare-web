"use client";

import { FormEvent, useState } from "react";

export default function BpoDiagnosisForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    setStatus("sending");
    setError("");

    const data = new FormData(form);
    data.append("form_type", "Luare BPO 30分 Finance体制診断");

    try {
      const response = await fetch("https://formspree.io/f/mojppoor", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("submit_failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("送信できませんでした。入力内容はそのままです。時間をおいて再度お試しください。");
    }
  }

  return (
    <form className="bpo-form" onSubmit={handleSubmit} noValidate>
      <p className="bpo-form-intro">
        まだ課題が整理されていなくても構いません。<br />
        現在困っていることを簡単にお知らせください。
      </p>

      <div className="bpo-form-grid">
        <label>
          <span>会社名 <b>必須</b></span>
          <input name="company" type="text" autoComplete="organization" required />
        </label>
        <label>
          <span>お名前 <b>必須</b></span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label className="bpo-form-wide">
          <span>会社メールアドレス <b>必須</b></span>
          <input name="email" type="email" autoComplete="email" inputMode="email" required />
        </label>
        <label className="bpo-form-wide">
          <span>ご相談内容 <b>必須</b></span>
          <textarea
            name="message"
            rows={6}
            placeholder="例：経理担当者の採用が難しい、海外本社への月次報告を安定させたい、退職予定者からの引継ぎを相談したい など"
            required
          />
        </label>
      </div>

      <label className="bpo-privacy">
        <input name="privacy_agree" type="checkbox" value="同意する" required />
        <span>プライバシーに関する取扱いに同意して送信します。</span>
      </label>

      {status === "error" && <p className="bpo-form-error" role="alert">{error}</p>}
      {status === "success" && (
        <div className="bpo-form-success" role="status">
          <strong>お申し込みを受け付けました。</strong>
          <p>内容を確認のうえ、Finance体制診断の日程についてご連絡します。</p>
        </div>
      )}

      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "送信中..." : "30分の無料診断を申し込む"}
        <span aria-hidden="true">→</span>
      </button>

      <p className="bpo-form-micro">
        Luare BPOが合わない場合も含め、現在のFinance体制を整理します。
      </p>
    </form>
  );
}
